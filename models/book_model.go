package models

import "errors"

type Book struct {
    ID       string `json:"id"`
    Title    string `json:"title"`
    Author   string `json:"author"`
    Quantity int    `json:"quantity"`
    Slug     string `json:"slug"`
}

var Books = []Book{
    {ID: "1", Title: "Mein Kampft", Author: "Adolf Hitler", Quantity: 69, Slug: "mein-kampft"},
    {ID: "2", Title: "Communist Manifesto", Author: "Friedrich Engels", Quantity: 420, Slug: "communist-manifesto"},
    {ID: "3", Title: "Das Kapital", Author: "Karl Marx", Quantity: 31, Slug: "das-kapital"},
}

func GetBookById(id string) (*Book, error) {
    for i, b := range Books {
        if b.ID == id {
            return &Books[i], nil
        }
    }

    return nil, errors.New("book with such ID not found")
}

func GetBookBySlug(slug string) (*Book, error) {
    for i, b := range Books {
        if b.Slug == slug {
            return &Books[i], nil
        }
    }

    return nil, errors.New("book with such slug not found")
}
