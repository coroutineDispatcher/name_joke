import kotlin.browser.document
import kotlinx.html.*
import kotlinx.html.dom.*
import kotlinx.html.js.onSubmitFunction
import org.w3c.dom.HTMLElement
import org.w3c.dom.HTMLInputElement
import kotlin.browser.window

class JokesPage(private val presenter: JokeContract.Presenter) : JokeContract.View {
    val root = document.getElementById("root")
    private var loaderDiv: HTMLElement = document.create.div {
        p {
            +"Loading..."
        }
    }

    init {

        val div = document.create.div {
            h3 {
                +"Place your name and get a random joke"
            }

            form {
                id = "form"
                input {
                    id = "name"
                    type = InputType.text
                }
                input {
                    type = InputType.submit
                }

                onSubmitFunction = { event ->
                    val element = document.getElementById("name") as HTMLInputElement
                    if (element.value.isNotEmpty())
                        presenter.loadJokes(element.value)
                    else
                        window.alert("Please place some name")
                    event.preventDefault()
                }
            }
        }
        root!!.appendChild(div)
    }

    override fun showJoke(jokeValue: String) {
        val text = document.create.div {
            h3 {
                +jokeValue.replace("norris", "", true)
            }
        }
        root!!.appendChild(text)
    }

    override fun showLoader() {
        root!!.appendChild(loaderDiv)
    }

    override fun hideLoader() {
        root!!.removeChild(loaderDiv)
    }
}