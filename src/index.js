const fs = require('fs')

const myFileWriter = async (fileName, fileContent) => {
	fs.writeFile(fileName, fileContent, (err) => {
		if(err) console.log(err)
		else console.log('file created')
	})
}
myFileWriter('file.txt', 'Hello')

const myFileReader = async (fileName) => {
	fs.readFile(fileName, 'utf-8', (err, data) => {
		if(err) console.log(err)
		else console.log(data)
	})
}
myFileReader('file.txt')

const myFileUpdater = async (fileName, fileContent) => {
	fs.readFile(fileName, 'utf-8', (err, data) => {
		if(err) console.log(err)
		else{
			fs.writeFile(fileName,`${data} ${fileContent}`, (err) => {
				if(err) console.log(err)
				else console.log('file updated')
			})
		}
	})
}
myFileUpdater('file.txt', 'World')

const myFileDeleter = async (fileName) => {
	fs.unlink(fileName, (err) => {
		if(err) console.log(err)
		else console.log('file deleted')
	})
}
myFileDeleter('input.txt')


module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }