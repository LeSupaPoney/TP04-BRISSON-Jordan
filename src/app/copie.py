import os

# Définir le répertoire racine contenant les fichiers .ts
root_directory = r'E:\CNAM\SIWEB-TP04\src\app'  # Préfixer avec r pour traiter les antislashs correctement

# Définir le nom du fichier de sortie
output_file = 'outputCSS.txt'

try:
    with open(output_file, 'w') as outfile:
        # Parcourir le répertoire racine et tous les sous-dossiers
        for directory, subdirectories, files in os.walk(root_directory):
            for filename in files:
                if filename.endswith('.css') or filename.endswith(".AAAAAAAAA"):
                    file_path = os.path.join(directory, filename)
                    print(f'Traitement du fichier : {file_path}')
                    # Écrire le chemin relatif et le nom du fichier dans le fichier de sortie
                    relative_path = os.path.relpath(file_path, root_directory)
                    outfile.write(f'{relative_path}:\n')

                    # Ouvrir et lire le contenu du fichier .ts
                    with open(file_path, 'r') as infile:
                        outfile.write(infile.read())

                    # Ajouter des traits pour séparer les contenus des fichiers
                    outfile.write('\n___\n')

    print(f'Tous les fichiers .ts ont été copiés dans {output_file}')
except Exception as e:
    print(f'Une erreur est survenue : {e}')
