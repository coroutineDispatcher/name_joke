import org.w3c.xhr.XMLHttpRequest

class JokesPresenter : JokeContract.Presenter {
    private lateinit var view: JokeContract.View

    override fun attach(view: JokeContract.View) {
        this.view = view
    }

    override fun loadJokes(input: String) {
        view.showLoader()
        getAsync("https://api.icndb.com/jokes/random?firstName=$input&escape=javascript") {
            val joke = JSON.parse<RandomJokeResponse>(it)

            view.hideLoader()

            view.showJoke(joke.value.joke)
        }
    }

    private fun getAsync(url: String, callback: (String) -> Unit) {
        val xmlHttp = XMLHttpRequest()
        xmlHttp.open("GET", url)
        xmlHttp.onload = {
            if (xmlHttp.status == 200.toShort()) {
                println(xmlHttp.responseText)
                callback.invoke(xmlHttp.responseText)
            }
        }
        xmlHttp.send()
    }
}