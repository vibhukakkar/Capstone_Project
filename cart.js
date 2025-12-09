// Simple cart functionality
const items = [
    { price: 1999, qty: 1 },
    { price: 4999, qty: 1 },
    { price: 899, qty: 2 }
];

function update() {
    let subtotal = 0;
    let count = 0;
    

  
    document.querySelectorAll('.cart-item').forEach((item, i) => {
        const qty = items[i].qty;
        const total = items[i].price * qty;
        
        item.querySelector('.quantity-input').value = qty;
        item.querySelector('.item-total').textContent = '₹' + total.toLocaleString('en-IN');
        
        subtotal += total;
        count += qty;
    });
    
  
    const tax = Math.round(subtotal * 0.18);
    const total = subtotal + 99 - 500 + tax;
    
    document.querySelectorAll('.summary-row span:last-child')[0].textContent = '₹' + subtotal.toLocaleString('en-IN');
    document.querySelectorAll('.summary-row span:last-child')[3].textContent = '₹' + tax.toLocaleString('en-IN');
    document.querySelector('.summary-total span:last-child').textContent = '₹' + total.toLocaleString('en-IN');
    document.querySelector('.summary-row span:first-child').textContent = `Subtotal (${count} items)`;
}


document.querySelectorAll('.cart-item').forEach((item, i) => {
    const btns = item.querySelectorAll('.quantity-btn');
    
    btns[0].onclick = () => {
        if (items[i].qty > 1) {
            items[i].qty--;
            update();
        }
    };
    
    btns[1].onclick = () => {
        items[i].qty++;
        update();
    };
    
    item.querySelector('.remove-btn').onclick = () => {
        if (confirm('Remove item?')) {
            item.remove();
            items.splice(i, 1);
            update();
        }
    };
});

update();
