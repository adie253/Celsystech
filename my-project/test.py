class DuplicateFileFinder:
    """
    A class to find duplicate files based on their content across different directories.
    """
    
    def __init__(self, source):
        """
        Initialize the DuplicateFileFinder.
        
        Args:
            source (str or list): File path to read paths from, or list of path entries
        """
        if isinstance(source, str):
            # Read from file
            self.paths = self._read_from_file(source)
        elif isinstance(source, list):
            # Use provided list
            if not source:
                raise ValueError("paths list cannot be empty")
            self.paths = source
        else:
            raise TypeError(f"source must be a string (file path) or list, got {type(source).__name__}")
        
        self.content_map = {}
        self.duplicate_groups = []
    
    def _read_from_file(self, file_path):
        """
        Read paths from a file.
        
        Args:
            file_path (str): Path to the file containing path entries
            
        Returns:
            list: List of path entries from the file
        """
        try:
            with open(file_path, 'r') as f:
                lines = [line.rstrip('\n\r') for line in f if line.strip()]
            
            if not lines:
                raise ValueError(f"File '{file_path}' is empty or contains no valid entries")
            
            return lines
            
        except FileNotFoundError:
            raise FileNotFoundError(f"File not found: '{file_path}'")
        except PermissionError:
            raise PermissionError(f"Permission denied to read file: '{file_path}'")
        except IOError as e:
            raise IOError(f"Error reading file '{file_path}': {str(e)}")
    
    def process(self):
        """Process the paths and build the content map."""
        for index, line in enumerate(self.paths):
            if not isinstance(line, str):
                raise TypeError(f"Entry at index {index} must be a string, got {type(line).__name__}")
            
            parts = line.split()
            
            if len(parts) < 2:
                raise ValueError(f"Entry at index {index} is invalid: '{line}'. Expected format: 'directory file1(content1) file2(content2)'")
            
            directory = parts[0]
            
            for file_info in parts[1:]:
                if '(' not in file_info:
                    raise ValueError(f"Entry at index {index} has invalid file format: '{file_info}'. Missing opening parenthesis '('")
                
                if ')' not in file_info:
                    raise ValueError(f"Entry at index {index} has invalid file format: '{file_info}'. Missing closing parenthesis ')'")
                
                try:
                    path, content = file_info.split('(')
                    content = content[:-1]
                except ValueError:
                    raise ValueError(f"Entry at index {index} has invalid file format: '{file_info}'. Cannot parse file name and content")
                
                if not path:
                    raise ValueError(f"Entry at index {index} has empty filename in: '{file_info}'")
                
                if not content:
                    raise ValueError(f"Entry at index {index} has empty content in: '{file_info}'")
                
                finalPath = f"{directory}/{path}"
                
                if content not in self.content_map:
                    self.content_map[content] = set()
                
                self.content_map[content].add(finalPath)
    
    def find_duplicates(self):
        """Find duplicate files based on content."""
        for key, value in self.content_map.items():
            if len(value) >= 2:
                self.duplicate_groups.append(sorted(value))
        
        self.duplicate_groups.sort(key=lambda x: (-len(x), x[0]))
        
        return self.duplicate_groups
    
    def get_result(self):
        """Process paths and return duplicate groups."""
        self.process()
        return self.find_duplicates()


# Example usage
if __name__ == "__main__":
    
    try:
        finder = DuplicateFileFinder('paths.txt')
        result = finder.get_result()
        print(result)
    except (TypeError, ValueError, FileNotFoundError, PermissionError, IOError) as e:
        print(f"Error: {e}")