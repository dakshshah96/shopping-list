/*

In terms of user experience, your shopping list app must allow users to:

1. enter items they need to purchase by entering text and hitting "Return" or clicking the "Add item" button
2. check and uncheck items on the list by clicking the "Check" button
3. permanently remove items from the list

*/

var state = {
    items: []
};

function addItem(state, item) {
    state.items.push(item);
}

function renderShoppingList(state, element) {
    var itemsHTML = state.items.map(function(item) {
        return 0;
    });
}

$(function() {

});
