import os

# Chemin vers le répertoire "data"
data_directory = 'data'

# Extensions de fichiers considérées comme des images
image_extensions = ('.png', '.jpg', '.jpeg', '.gif', '.bmp', '.svg', '.webp')

# Liste pour stocker les noms des fichiers images
image_files = []

# Parcours des fichiers dans le répertoire "data"
for filename in os.listdir(data_directory):
    # Vérifie si le fichier a une extension d'image
    if filename.lower().endswith(image_extensions):
        image_files.append(filename)

# Génération de la chaîne pour le tableau JavaScript
js_array_string = 'let imageFiles = [\n'
for image in image_files:
    js_array_string += f"  '{image}',\n"
js_array_string += '];'

# Affiche la chaîne générée
print(js_array_string)
