JSX is a HTML like syntax used inside javascript which later converted to 
pure HTML by Babel.
JSX -> javascript Extension 
A simple jsx is like html and it is valid javascript. But if we are using multiple 
lines then we have to wrap it inside bracket
let heading = <h1> This is jsx heading </h1>

in multiple lines
let heading = (
    <h1>
    this is jsx heading
    </h1>
)

JSX follows camelCase names
HTML tags inside JSX
class = className
tabindex = tabIndex

jsx also allows javascript code to be run inside {}.
So all the js variable, expression can be run via {}.

Jsx also does code sanitizing to avoid XSS attack. (injected via {js code}).
