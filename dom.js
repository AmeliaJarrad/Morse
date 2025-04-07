export const createTextBox = (type, content, parent, classes = []) => {
    const el = document.createElement(type);
    classes.forEach((c) => el.classList.add(c))
    const text = document.createTextNode(content);
    el.appendChild(text);
    parent.appendChild(el);  
};

export const removeChild = (parent, child) => {
        parent.removeChild(child);

} 