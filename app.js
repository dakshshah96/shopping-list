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

function deleteItem(state, item) {
    var index = state.items.indexOf(item);
    state.items.splice(index, 1);
}

function renderShoppingList(state, element) {
    var itemsHTML = state.items.map(function(item) {
        return '<li><span class="shopping-item">' + item + '</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>';
    });
    element.html(itemsHTML);
}

$(function() {
    $('#js-shopping-list-form').submit(function(event) {
        event.preventDefault();
        addItem(state, $('#shopping-list-entry').val());
        renderShoppingList(state, $('.shopping-list'));
    });

    $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
        event.preventDefault();
        deleteItem(state, $(this).closest('.shopping-item').val());
        renderShoppingList(state, $('.shopping-list'));
    });
});
