import os

def rename_folders(directory):
    
    for item in os.listdir(directory):
        item_path = os.path.join(directory, item)
        
        if os.path.isdir(item_path):
            new_name = f'{int(item.split('-')[0]):03}-{'-'.join(item.split('-')[1:])}'
            new_path = os.path.join(directory, new_name)
            os.rename(item_path, new_path)
                
                
directory_path = os.getcwd()
rename_folders(directory_path)
