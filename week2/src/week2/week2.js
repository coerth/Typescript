// const superagent = require('superagent')
// const fs = require('fs')
// const { resolve } = require('path')

// /* fs.readFile(`${__dirname}/dog.txt`, 'utf-8', (err, data) => {


//     console.log(data)

//     superagent
//     .get(`https://dog.ceo/api/breed/${data.trim()}/images/random`)
//     .then (res => {
//         fs.writeFile(`dog.img.txt`, res.body.message, err => {
//             if(err) return console.log(err)
//             console.log("Dog image saved to file successfully.")
//         })
//     })
// }) */
// /* 
// const readFilePro = (file) => {
//     return new Promise ( (resolve, reject) => {

//         fs.readFile(file, 'utf-8', (err, data) => {
//             if(err) reject("File not found")
//             resolve(data)
//         })
//     })
// }
//  */
// /* const writeFilePro = (data) => {
//     return new Promise( (resolve, reject) => {
//         fs.writeFile("dog-img.txt",data,  err => {
//             if(err) reject("Bla")
//             resolve("Dog image saved to file successfully.")
//         })
//     })
// } */
// /* 
// const writeFilePro = (data) => {
//     //executor function
//     return new Promise ((resolve, reject) => {
//         fs.writeFile('dog-img.txt', data, err => {
//             if(err) reject("File not found");
//             resolve("Dog Image saved to file succesfully");
//         })
//     })
// } */
 

// /* const readFilePro = (file) => {
//     //executor function
//     return new Promise((resolve, reject) => {
//         fs.readFile(file, 'utf-8', (err, data) => {
//             if(err) reject("Error:" + err)
//             resolve(data)
//         })
//     })
// }

// const writeFilePro = (data) => {
//     return new Promise((resolve, reject) => {
//         fs.writeFile(`dog.img.txt`, data, err => {
//             if(err) reject("Bla")
//             resolve("Yes")
//         })
//     })
// }



// /* readFilePro(`${__dirname}/dog.txt`)
// .then (data => 
//     superagent
//     .get(`https://dog.ceo/api/breed/${data.trim()}/images/random`)
//     .then(res => writeFilePro(res.body.message))
//     .then(res => console.log(res))
// ) */

// /* readFilePro(`${__dirname}/dog.txt`).then(data => 
//     superagent
//     .get(`https://dog.ceo/api/breed/${data.trim()}/images/random`)
//     .then(res => writeFilePro(res.body.message))
//     .then(res =>  console.log(res))
//     .catch(err => console.log(err))
//     .finally(()=> console.log('DONE!')),
// ) */

// // const getDogPics = async () => {
// //     const data = await readFilePro(`${__dirname}/dog.txt`)
// //     const res = await superagent.get(`https://dog.ceo/api/breed/${data.trim()}/images/random`)
// //     const text = await writeFilePro(res.body.message)
// //     console.log(text)
// // }

// // getDogPics() */

// const readFilePro = (file) => {
//     //executor function
//     return new Promise((resolve, reject) => {
//         fs.readFile(file, 'utf-8', (err, data) => {
//             if(err) reject("Error:" + err)
//             resolve(data)
//         })
//     })
// }

// const writeFilePro = (data) => {
//     return new Promise((resolve, reject) => {
//         fs.writeFile('file_name.txt',data,  err=> {
//             if(err) reject("Error " + err)
//             resolve("Data saved")
//         })
//     })
// }

// //ASYNCH AWAIT
// const getDogPics = async () => {
//     try {
//     const data = await readFilePro(`${__dirname}/dog.txt`)
//     const res = await superagent.get(`https://dog.ceo/api/breed/${data.trim()}/images/random`)
//     const text = await writeFilePro(res.body.message)
//     console.log(text)
//     }catch(e) {
//         console.log(e)
//     }
// } 
// getDogPics()

const superagent = require('superagent');
const fs = require('fs');


// //CALLBACK HELL
// fs.readFile(`${__dirname}/dog.txt`, "utf-8", (err, data) => {
//   console.log(data);

//   superagent
//     .get(`https://dog.ceo/api/breed/${data.trim()}/images/random`)
//     .end((err, res) => {
//       if (err) return console.log(err);
//       console.log(res.body.message);

//       fs.writeFile('dog-img.txt', res.body.message, err => {
//         if(err) return console.log(err);
//         console.log("Dog Image saved to file succesfully")})
//     });

// //EN anden mÃ¥de ved ikke hvad
// fs.readFile(`${__dirname}/dog.txt`, "utf-8", (err, data) => {     
//     superagent
//         .get(`https://dog.ceo/api/breed/${data.trim()}/images/random`)
//         .then(res => {
//         console.log(res.body.message);
//         fs.writeFile('dog-img.txt', res.body.message, err => {
//             if(err) return console.log(err);
//                 console.log("Dog Image saved to file succesfully")
//             });
//             })
//             .catch(err => console.log(err))
//           });
          
// });

//PROMISES
const readFilePro = (file) => {
    //executor function
    return new Promise ((resolve, reject) => {
        fs.readFile(file, 'utf-8', (err, data) => {
            if(err) reject("File not found");
            resolve(data);
        })
    })
}

const writeFilePro = (data) => {
    //executor function
    return new Promise ((resolve, reject) => {
        fs.writeFile('dog-img.txt', data, err => {
            if(err) reject("File not found");
            resolve("Dog Image saved to file succesfully");
        })
    })
}

// readFilePro(`${__dirname}/dog.txt`)
// .then(data =>
//     superagent.get(`https://dog.ceo/api/breed/${data.trim()}/images/random`)
//     .then(res => writeFilePro(res.body.message))
//     .then(res => console.log(res))
//     .catch(err => console.log(err))
//     .finally(() => console.log("I am done!!")))


//ASYNC AWAIT
const getDogPics = async () => {
    try{
        const data = await readFilePro(`${__dirname}/dog.txt`);
        const res = await superagent.get(`https://dog.ceo/api/breed/${data.trim()}/images/random`);
        const text = await writeFilePro(res.body.message)
        return text;
    }catch (e){
        console.log(e)
    }
   
}
//IFFI
(async () => {
    
    try{
    console.log("1: Will get dog pics!")
    const data = await getDogPics();
    console.log("2: ", data)
    console.log("3: Done getting dog pics")
    }
    catch( e) {
        console.log(e)
    }

})()

// getDogPics()
// .then(res => console.log(res));

