module.exports =function cors(req, res, next) {
  // Устанавливаем заголовки, разрешающие CORS
  res.header("Access-Control-Allow-Origin", "*"); 
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
  
}

