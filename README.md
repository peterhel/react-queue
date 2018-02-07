### What?

This little fella' enqueues a given property's changes and send it with a timed interval to whatever element you pass to it.

Say for example you have a banner that shows news headlines. Instead of changing it whenever the props changes, you can throttle it with `withQueue`.

```
const NewsBanner = props => <div>{props.entity.title}</div>;

const init = props => ({
    duration: 5000, // Dequeue interval
    props: { // The props to be passed down to <NewsBanner />
        title: props.news.headline
    }
})

export default withQueue(init)(NewsBanner);
```