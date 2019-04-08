var movies = [
    {
        title: 'Frozen',
        watched: true,
        rating: 3.5
    },
    {
        title: 'Interstellar',
        watched: true,
        rating: 5
    }
]

movies.forEach(function(movies){
    var result = "You have ";
    if (movies.watched == true){
        result += "watched ";
    }
    else {
        result += "not seen ";
    }
    result += "\"" + movies.title + "\" - ";
    result += movies.rating + " stars"

    console.log(result)
})
