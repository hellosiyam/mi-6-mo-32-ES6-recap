function callback(greatingHendeler, name) {
    greatingHendeler(name);
    
}

function greatingHendeler(name) {
    console.log('good Morning', name);
    
}


callback(greatingHendeler, 'Tom Haland')