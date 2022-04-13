const express = require("express");
const path = require('path');
const app = express();
const fs = require("fs");

// создаем парсер для данных application/x-www-form-urlencoded
const urlencodedParser = express.urlencoded({extended: false});
app.use(express.static('public'))
app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/Form-r.html`);
});

function FileWrite(error)
{
    if(error)
    {
        console.log("Ошибка")
    }
    else
    {
        console.log("Добавлен новый пользователь")
    }
}

app.post("/", (req, res) => {
    if(!req.body)
        console.log("Error")
    else
    {
        let user = fs.readFileSync('User.txt', 'utf-8').toString().split("\n")
        let result = ""
        for(let i = 0; i < user.length; i++)
        {
            let userData = user[i].split(" ")
            if (userData[0] == req.body.username)
            {
                if (userData[1] == req.body.password)
                {
                    if (req.body.password == req.body.passAng)
                    {
                        result = "Привет, " + req.body.username
                    }
                }
                else
                {
                    result = "Ошибка, не верный пароль!"
                }
            }
        }
        if(!result)
        {
            fs.appendFile(__dirname + "/User.txt",'\n' + req.body.username + ' ' + req.body.password, FileWrite)
        }
    }
})

function AdminMode (req, res) {
    function AdminFunc(req, res) {
        let result = "Список пользователей:\n";
        let user = fs.readFileSync('User.txt', 'utf-8').toString().split("\n")
        for (let i = 0; i < user.length; i++) {
            let userParams = user[i].split(' ')
            result += userParams[0] + '\n'
        }
        res.send(result)
    }

    if(req.headers.admin == 'Администратор!')
    {
        AdminFunc();
    }
    else
    {
        res.send("Пользователь")
    }
}
app.get("/admin", AdminMode)

app.listen(3000, ()=>console.log("Сервер запущен..."));
