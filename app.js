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
        deleteItem(state, $(this).parent().siblings('.shopping-item').text());
        renderShoppingList(state, $('.shopping-list'));
    });

    $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
        event.preventDefault();
        $(this).closest('.shopping-item').toggleClass('shopping-item__checked');
    });
});