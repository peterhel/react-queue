### What?

This little fella' enqueues a given property's changes and send it with a timed interval to whatever element you pass to it.

Say for example you have a banner that shows news headlines. Instead of changing it whenever the props changes, you can throttle it with `withQueue`.

```
const NewsBanner = props => <div>{props.entity.headline}</div>;

const init = props => ({
    duration: 5000, // Dequeue interval
    entity: props.lastestNews // { headline: 'All is good!' } Tells which property's value to accumulate. Gets implicitly passed down to <NewsBanner/> each <duration>ms.
    props: { 
        // Props to be explicitly passed down to <NewsBanner />
    }
})

export default withQueue(init)(NewsBanner);
```