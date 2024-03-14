package main

import (
    "net/http"

    "github.com/gin-gonic/gin"
    "github.com/1chooo/trade-tracker/handlers"
)

func main() {
    router := gin.Default()
    router.LoadHTMLFiles("./views/index.html")

    router.GET("/", func(ctx *gin.Context) {
        ctx.HTML(http.StatusOK, "index.html", nil)
    })

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
