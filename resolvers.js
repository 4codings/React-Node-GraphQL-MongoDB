const resolvers = {
    Query: {
        customers: async (parent, args, { Customer }, info) => {
            return await Customer.find();
        },
        customer: async (parent, { id }, { Customer }, info) => {
            return await Customer.findById(id);
        }
    }
}

module.exports = resolvers;
