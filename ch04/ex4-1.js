// 4-1-2 콜백 지옥(Callback hell)

asyncFoo(err => {
    asyncBar(err => {
        asyncFooBar(err => {
            //...
        })
    })
})