export function Html(children: any) {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="http://localhost:4002/style.css">

 img src="http://localhost:4002/images/12.jpg"

</head>
<body id="app">
    ${children}
</body>
</html>

`

}