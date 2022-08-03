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
        return row
    })
    return formattedData
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