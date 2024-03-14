package handlers

import (
    "net/http"

    "github.com/gin-gonic/gin"
    "github.com/1chooo/trade-tracker/models" // Update the import path accordingly
)

func GetBooks(ctx *gin.Context) {
    id, ok_id := ctx.GetQuery("id")
    slug, ok_slug := ctx.GetQuery("slug")

    if ok_id && ok_slug {
        ctx.IndentedJSON(http.StatusBadRequest, gin.H{"message": "ID and Slug cannot be used as Index simultaneously."})
    } else if !ok_id && !ok_slug {
        ctx.IndentedJSON(http.StatusOK, models.Books)
    } else if ok_id {
        book, err := models.GetBookById(id)
        if err != nil {
            ctx.IndentedJSON(http.StatusNotFound, gin.H{"message": err})
            return
        }

        ctx.IndentedJSON(http.StatusOK, book)
    } else if ok_slug {
        book, err := models.GetBookBySlug(slug)
        if err != nil {
            ctx.IndentedJSON(http.StatusNotFound, gin.H{"message": err})
            return
        }

        ctx.IndentedJSON(http.StatusOK, book)
    }
}

func CheckoutBook(ctx *gin.Context) {
    id, ok := ctx.GetQuery("id")

    if !ok {
        ctx.IndentedJSON(http.StatusBadRequest, gin.H{"message": "Missing id query parameter."})
        return
    }

    book, err := models.GetBookById(id)
    if err != nil {
        ctx.IndentedJSON(http.StatusNotFound, gin.H{"message": "Book not found."})
        return
    }

    if book.Quantity <= 0 {
        ctx.IndentedJSON(http.StatusBadRequest, gin.H{"message": "Book not available"})
        return
    }

    book.Quantity--
    ctx.IndentedJSON(http.StatusOK, book)
}

func ReturnBook(ctx *gin.Context) {
    id, ok := ctx.GetQuery("id")

    if !ok {
        ctx.IndentedJSON(http.StatusBadRequest, gin.H{"message": "Missing id query parameter."})
        return
    }

    book, err := models.GetBookById(id)
    if err != nil {
        ctx.IndentedJSON(http.StatusNotFound, gin.H{"message": "Book not found."})
        return
    }

    book.Quantity++
    ctx.IndentedJSON(http.StatusOK, book)
}

func CreateBook(ctx *gin.Context) {
    var newBook models.Book

    if err := ctx.BindJSON(&newBook); err != nil {
        ctx.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
        return
    }

    models.Books = append(models.Books, newBook)
    ctx.JSON(http.StatusCreated, newBook)
}
