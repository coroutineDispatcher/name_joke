interface JokeContract {
    interface View {
        fun showJoke(jokeValue: String)
        fun showLoader()
        fun hideLoader()
    }

    interface Presenter {
        fun attach(view: View)
        fun loadJokes(input: String)
    }
}