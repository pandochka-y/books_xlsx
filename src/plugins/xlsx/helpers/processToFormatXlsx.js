const processToFormatXlsx = (data) => {
    const formattedData = data.map((item, index) => {
        const row = []
        console.log(item?.author_name)
        let {firstName, lastName} = handlerName(item?.author_name);
        row.push(renderObjectXlsx(index + 1))
        row.push(renderObjectXlsx(firstName))
        row.push(renderObjectXlsx(lastName))
        row.push(renderObjectXlsx(item.title))
        row.push(renderObjectXlsx(item?.first_publish_year))
        // row.push(renderObjectXlsx(index + 1))
        // row.push(renderObjectXlsx(item.title))
        // row.push(renderObjectXlsx(item.body))
        // row.push(renderObjectXlsx('testasdasdasdas'))
        // row.push(renderObjectXlsx('tes1tasdasdasdasdas'))
        return row
    })
    console.log(formattedData)
    return formattedData
    // key,isbn,author_name,title,first_publish_year
}

const renderObjectXlsx = (value) => {
    const template = {v: value, t: 's', s: {alignment:   {vertical: 'center', horizontal: 'center', wrapText: true }}}
    if (!value) {
        template.t = 'z';
        return template
    }
    if (typeof value === "string") return template;
    template.t = 'n';
    return template
}

const handlerName = (propName) => {
    console.log(propName)
    const name = {
        firstName: '',
        lastName: '',
    }
    if (!propName) return name;

    const split = propName[0].split(' ')

    if (split.length === 1) {
        name.lastName = split[0];
        return name;
    }

    name.firstName = split[0];
    name.lastName = split[split.length - 1];

    return name;
}