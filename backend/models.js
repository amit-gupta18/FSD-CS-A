const Userschema = {
    id: {
        type: 'integer',
        autoIncrement: true,
    },
    username: {
        type: 'string',
        required: true,
    },
    email: {
        type: 'string',
        required: true,
    },
    password: {
        type: 'string',
        required: true,
    },
};

const User = mongoose.model('User', Userschema);
// export the schema
module.exports = {
    User,
};