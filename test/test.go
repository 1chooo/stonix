package main

import (
	"fmt"
	"log"
	"os"
	"os/exec"
)

func main() {
	if len(os.Args) == 1 {
		testWithoutParam()
	} else if len(os.Args) == 2 {
		param := os.Args[1]
		switch param {
		case "id":
			testWithIDParam()
		case "slug":
			testWithSlugParam()
		default:
			log.Fatal("Invalid parameter. Please provide 'id', 'slug', or no parameter.")
		}
	} else {
		log.Fatal("Too many parameters provided. Please provide 'id', 'slug', or no parameter.")
	}
}

func testWithoutParam() {
	fmt.Println("No parameter:")
	executeCurlCommand("localhost:8080/books")
}

func testWithIDParam() {
	fmt.Println("ID parameter:")
	executeCurlCommand("localhost:8080/books?id=2")
}

func testWithSlugParam() {
	fmt.Println("Slug parameter:")
	executeCurlCommand("localhost:8080/books?slug=mein-kampft")
}

func executeCurlCommand(url string) {
	cmd := exec.Command("curl", url, "--request", "GET")
	cmd.Stdout = os.Stdout
	cmd.Stderr = os.Stderr

	err := cmd.Run()
	if err != nil {
		log.Fatalf("Error executing command: %v", err)
	}
}
