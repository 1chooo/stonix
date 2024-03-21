package main

import (
	"net/http"

	"github.com/1chooo/trade-tracker/handlers"
	"github.com/gin-gonic/gin"
)

type IndexData struct {
	Title   string
	Content string
}

func test(ctx *gin.Context) {
	data := new(IndexData)
	data.Title = "Trade Tracker"
	data.Content = "Welcome to the home page."
	ctx.HTML(http.StatusOK, "index.html", data)
}

func main() {
	router := gin.Default()
	router.LoadHTMLFiles("./templates/index.html", "./templates/login.html")
	router.Static("/assets", "./templates/assets")

	// router.GET("/", func(ctx *gin.Context) {
	// 	ctx.HTML(http.StatusOK, "index.html", nil)
	// })
	router.GET("/", test)
	router.GET("/login", handlers.LoginPage)
    router.POST("/login", handlers.LoginAuth)

	router.GET("/books", handlers.GetBooks)
	router.POST("/books", handlers.CreateBook)
	router.PATCH("/checkout", handlers.CheckoutBook)
	router.PATCH("/return", handlers.ReturnBook)
	router.GET("/welcome", func(ctx *gin.Context) {
		firstname := ctx.DefaultQuery("firstname", "Guest")
		lastname := ctx.Query("lastname") // shortcut for ctx.Request.URL.Query().Get("lastname")

		ctx.String(http.StatusOK, "Hello %s %s", firstname, lastname)
	})
	router.Run("localhost:8080")
}
