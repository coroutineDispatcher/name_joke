if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'RandomJoke'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'RandomJoke'.");
}
if (typeof this['kotlinx-html-js'] === 'undefined') {
  throw new Error("Error loading module 'RandomJoke'. Its dependency 'kotlinx-html-js' was not found. Please, check whether 'kotlinx-html-js' is loaded prior to 'RandomJoke'.");
}
var RandomJoke = function (_, Kotlin, $module$kotlinx_html_js) {
  'use strict';
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var get_create = $module$kotlinx_html_js.kotlinx.html.dom.get_create_4wc2mh$;
  var replace = Kotlin.kotlin.text.replace_680rmw$;
  var Unit = Kotlin.kotlin.Unit;
  var h3 = $module$kotlinx_html_js.kotlinx.html.h3_agelx2$;
  var div = $module$kotlinx_html_js.kotlinx.html.div_59el9d$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var p = $module$kotlinx_html_js.kotlinx.html.p_8pggrc$;
  var set_id = $module$kotlinx_html_js.kotlinx.html.set_id_ueiko3$;
  var InputType = $module$kotlinx_html_js.kotlinx.html.InputType;
  var input = $module$kotlinx_html_js.kotlinx.html.input_e1g74z$;
  var throwCCE = Kotlin.throwCCE;
  var set_onSubmitFunction = $module$kotlinx_html_js.kotlinx.html.js.set_onSubmitFunction_pszlq2$;
  var form = $module$kotlinx_html_js.kotlinx.html.form_3vb3wm$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var throwUPAE = Kotlin.throwUPAE;
  var toShort = Kotlin.toShort;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  function JokeContract() {
  }
  function JokeContract$View() {
  }
  JokeContract$View.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'View',
    interfaces: []
  };
  function JokeContract$Presenter() {
  }
  JokeContract$Presenter.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Presenter',
    interfaces: []
  };
  JokeContract.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'JokeContract',
    interfaces: []
  };
  function JokesPage(presenter) {
    this.presenter_0 = presenter;
    this.root = document.getElementById('root');
    this.loaderDiv_0 = div(get_create(document), void 0, JokesPage$loaderDiv$lambda);
    var div_0 = div(get_create(document), void 0, JokesPage_init$lambda(this));
    ensureNotNull(this.root).appendChild(div_0);
  }
  function JokesPage$showJoke$lambda$lambda(closure$jokeValue) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(replace(closure$jokeValue, 'norris', '', true));
      return Unit;
    };
  }
  function JokesPage$showJoke$lambda(closure$jokeValue) {
    return function ($receiver) {
      h3($receiver, void 0, JokesPage$showJoke$lambda$lambda(closure$jokeValue));
      return Unit;
    };
  }
  JokesPage.prototype.showJoke_61zpoe$ = function (jokeValue) {
    var text = div(get_create(document), void 0, JokesPage$showJoke$lambda(jokeValue));
    ensureNotNull(this.root).appendChild(text);
  };
  JokesPage.prototype.showLoader = function () {
    ensureNotNull(this.root).appendChild(this.loaderDiv_0);
  };
  JokesPage.prototype.hideLoader = function () {
    ensureNotNull(this.root).removeChild(this.loaderDiv_0);
  };
  function JokesPage$loaderDiv$lambda$lambda($receiver) {
    $receiver.unaryPlus_pdl1vz$('Loading...');
    return Unit;
  }
  function JokesPage$loaderDiv$lambda($receiver) {
    p($receiver, void 0, JokesPage$loaderDiv$lambda$lambda);
    return Unit;
  }
  function JokesPage_init$lambda$lambda($receiver) {
    $receiver.unaryPlus_pdl1vz$('Place your name and get a random joke');
    return Unit;
  }
  function JokesPage_init$lambda$lambda$lambda($receiver) {
    set_id($receiver, 'name');
    $receiver.type = InputType.text;
    return Unit;
  }
  function JokesPage_init$lambda$lambda$lambda_0($receiver) {
    $receiver.type = InputType.submit;
    return Unit;
  }
  function JokesPage_init$lambda$lambda$lambda_1(this$JokesPage) {
    return function (event) {
      var tmp$;
      var element = Kotlin.isType(tmp$ = document.getElementById('name'), HTMLInputElement) ? tmp$ : throwCCE();
      if (element.value.length > 0)
        this$JokesPage.presenter_0.loadJokes_61zpoe$(element.value);
      else
        window.alert('Please place some name');
      event.preventDefault();
      return Unit;
    };
  }
  function JokesPage_init$lambda$lambda_0(this$JokesPage) {
    return function ($receiver) {
      set_id($receiver, 'form');
      input($receiver, void 0, void 0, void 0, void 0, void 0, JokesPage_init$lambda$lambda$lambda);
      input($receiver, void 0, void 0, void 0, void 0, void 0, JokesPage_init$lambda$lambda$lambda_0);
      set_onSubmitFunction($receiver, JokesPage_init$lambda$lambda$lambda_1(this$JokesPage));
      return Unit;
    };
  }
  function JokesPage_init$lambda(this$JokesPage) {
    return function ($receiver) {
      h3($receiver, void 0, JokesPage_init$lambda$lambda);
      form($receiver, void 0, void 0, void 0, void 0, JokesPage_init$lambda$lambda_0(this$JokesPage));
      return Unit;
    };
  }
  JokesPage.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JokesPage',
    interfaces: [JokeContract$View]
  };
  function JokesPresenter() {
    this.view_um7nqz$_0 = this.view_um7nqz$_0;
  }
  Object.defineProperty(JokesPresenter.prototype, 'view_0', {
    get: function () {
      if (this.view_um7nqz$_0 == null)
        return throwUPAE('view');
      return this.view_um7nqz$_0;
    },
    set: function (view) {
      this.view_um7nqz$_0 = view;
    }
  });
  JokesPresenter.prototype.attach_aun6zi$ = function (view) {
    this.view_0 = view;
  };
  function JokesPresenter$loadJokes$lambda(this$JokesPresenter) {
    return function (it) {
      var joke = JSON.parse(it);
      this$JokesPresenter.view_0.hideLoader();
      this$JokesPresenter.view_0.showJoke_61zpoe$(joke.value.joke);
      return Unit;
    };
  }
  JokesPresenter.prototype.loadJokes_61zpoe$ = function (input) {
    this.view_0.showLoader();
    this.getAsync_0('https://api.icndb.com/jokes/random?firstName=' + input + '&escape=javascript', JokesPresenter$loadJokes$lambda(this));
  };
  function JokesPresenter$getAsync$lambda(closure$xmlHttp, closure$callback) {
    return function (it) {
      if (closure$xmlHttp.status === toShort(200)) {
        println(closure$xmlHttp.responseText);
        closure$callback(closure$xmlHttp.responseText);
      }
      return Unit;
    };
  }
  JokesPresenter.prototype.getAsync_0 = function (url, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open('GET', url);
    xmlHttp.onload = JokesPresenter$getAsync$lambda(xmlHttp, callback);
    xmlHttp.send();
  };
  JokesPresenter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JokesPresenter',
    interfaces: [JokeContract$Presenter]
  };
  function JokeValue(id, joke) {
    this.id = id;
    this.joke = joke;
  }
  JokeValue.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JokeValue',
    interfaces: []
  };
  JokeValue.prototype.component1 = function () {
    return this.id;
  };
  JokeValue.prototype.component2 = function () {
    return this.joke;
  };
  JokeValue.prototype.copy_19mbxw$ = function (id, joke) {
    return new JokeValue(id === void 0 ? this.id : id, joke === void 0 ? this.joke : joke);
  };
  JokeValue.prototype.toString = function () {
    return 'JokeValue(id=' + Kotlin.toString(this.id) + (', joke=' + Kotlin.toString(this.joke)) + ')';
  };
  JokeValue.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.joke) | 0;
    return result;
  };
  JokeValue.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.joke, other.joke)))));
  };
  function main() {
    var jokesPresenter = new JokesPresenter();
    var jokesPage = new JokesPage(jokesPresenter);
    jokesPresenter.attach_aun6zi$(jokesPage);
  }
  function RandomJokeResponse(type, value) {
    this.type = type;
    this.value = value;
  }
  RandomJokeResponse.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RandomJokeResponse',
    interfaces: []
  };
  RandomJokeResponse.prototype.component1 = function () {
    return this.type;
  };
  RandomJokeResponse.prototype.component2 = function () {
    return this.value;
  };
  RandomJokeResponse.prototype.copy_h271dw$ = function (type, value) {
    return new RandomJokeResponse(type === void 0 ? this.type : type, value === void 0 ? this.value : value);
  };
  RandomJokeResponse.prototype.toString = function () {
    return 'RandomJokeResponse(type=' + Kotlin.toString(this.type) + (', value=' + Kotlin.toString(this.value)) + ')';
  };
  RandomJokeResponse.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    return result;
  };
  RandomJokeResponse.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.type, other.type) && Kotlin.equals(this.value, other.value)))));
  };
  JokeContract.View = JokeContract$View;
  JokeContract.Presenter = JokeContract$Presenter;
  _.JokeContract = JokeContract;
  _.JokesPage = JokesPage;
  _.JokesPresenter = JokesPresenter;
  _.JokeValue = JokeValue;
  _.main = main;
  _.RandomJokeResponse = RandomJokeResponse;
  main();
  Kotlin.defineModule('RandomJoke', _);
  return _;
}(typeof RandomJoke === 'undefined' ? {} : RandomJoke, kotlin, this['kotlinx-html-js']);
