interface StringArray {
    [index: number]: string
}

const sa: StringArray = {}
sa[100] = "백";

interface StringDictionary {
    [index: string]: string
}

const sd: StringDictionary = {};
sd.hundred = "백";

interface StringArrayDictionary {
    [index: number]: string;
    [index: string]: string;
}

const sad: StringArrayDictionary = {};
sad[100] = "빽";
sad.hundred = "빽";

