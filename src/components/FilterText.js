export const filterText = ({ text }) => {
    const regex = /[!!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;

    const filterChar = text.replace(regex, " ");

    const trimText = filterChar.trim();

    return trimText;
};
