## Quick Start

```bash
$ npm install
```
```bash
$ copy and rename env.env to .env
```
config in file .env

Start your Express.js app at `http://localhost:3000/`:

```bash

    DEBUG=APP_NAME:* npm start
or
    npm start
```

## License
.
├── app.js
├── bin
│   └── www
├── package.json
├── public
│   ├── images
│   ├── javascripts
│   └── stylesheets
│       └── style.css
├── routes
│   ├── index.js
└── app
     ├── controllers
     ├── helpers
     ├── models
     ├── repository
     └── views
          ├── error.ejs
          ├── index.ejs
          └── layouts
               ├── app.ejs
               ├── header.ejs
               └── footer.ejs


file app.js: định nghĩa code ứng dụng của nodejs
file www in directories bin: sẽ là file chạy đầu tiên của ứng dụng, file này đã nhúm es6 và sẽ gọi file app.js vào để khởi chạy ứng dụng
file db.sqlite3: là file cơ sở dữ liệu
directories public: là thư mục chứa các tài nguyên cho fontend dùng
directories routes: là thư mục chứa các router, sẽ được use trong tệp app.js để định nghĩa router cho hệ thống nodejs
directories app: là thư mục chứa các controller, models, và views... của nodejs
directories controllers: chứa các controller sẽ được import ở các router, controller sẽ định nghĩa các function ứng với các router tương ứng
directories helpers: chứa các function hỗ trợ, hiện tại chưa dùng
directories models: chứa các cấu trúc thực thể, mỗi thực thể sẽ giúp chúng ta thực hiện thao tác với csdl
directories repository: chứa các hàm đã viết sẵn, tiện thao tác với các thực thể models
directories views: gồm thư mục layouts, và các thư mục của mỗi chức năng....