const { chdir, cwd } = process

export const setCurrentDirectory = ({ directory }) => chdir(directory)

export const getCurrentDirectory = () => cwd()

export const showCurrentDirectory = () => console.log('\nYou are currently in ', cwd());