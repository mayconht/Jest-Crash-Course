const functions = require('./functions');

test('Adds 2 + 2 to equal 4', () => {
    expect(functions.add(2, 2)).toBe(4);
});
test('Adds 2 + 2 not to be equal 5', () => {
    expect(functions.add(2, 2)).not.toBe(5);
});

test('Should be null', () => {
    expect(functions.isNull()).toBeNull();
})
test('Should be undefined', () => {
    expect(functions.isUndefined()).toBe(undefined);
})
test('Should be falsy', () => {
    expect(functions.checkValue(null)).toBeFalsy();
})
test('Should be truthy', () => {
    expect(functions.checkValue(1)).toBeTruthy();
})

//To equal should be used when working with objects
test('User should be Maycon Santos Object', () => {
    expect(functions.createUser()).toEqual({
        firstName: 'Maycon',
        lastName: 'Santos'
    })
})

// Less than and greater than
test('Should be under 1600', () => {
    const load1 = 800;
    const load2 = 700;
    expect(load1 + load2).toBeLessThan(1600);
})

// Regex
test('There is no I in team', () => {
    expect('team').not.toMatch(/I/i);
})  

// Arrays
test('Admin should be in usernames', () => {
    usernames = ['john', 'karen', 'admin'];
    expect(usernames).toContain('admin');
}
)

// Working with async data
test('User fetched name should be Leanne Graham', () =>{
    expect.assertions(1); // used when working with async data .... Without this line, the test will pass even if the promise is rejected (because the assertion is in the .then() block). With this line, the test will fail if the promise is rejected.
    return functions.fetchUser()
    .then(data => {
        expect(data.name).toEqual('Leanne Graham')
    })
})

// Async Await
test('User fetched name should be Leanne Graham but async', async() =>{
    expect.assertions(1);
    const data = await functions.fetchUser();
    expect(data.name).toEqual('Leanne Graham')
})
