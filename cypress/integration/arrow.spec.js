it('a function test', function() {
    console.log("function", this)
})

it('a arrow test', () => {
    console.log("arrow", this)
})