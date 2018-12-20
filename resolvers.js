const resolvers = {
    Query: {
        customers: async (parent, args, { Customer }, info) => {
            return await Customer.find();
        },
        customer: async (parent, { id }, { Customer }, info) => {
            return await Customer.findById(id);
        }
    },
    Mutation: {
        createCustomer: async (parent, { name, email }, { Customer }, info) => {
            const newCustomer = new Customer({
                name,
                email,
            });
            return await newCustomer.save();
        },
        updateCustomer: async (parent, { id, name, email }, { Customer }, info) => {
            return await Customer.findOneAndUpdate(
                { _id: id },
                { $set: { name, email } },
                { new: true },
            )
        },
        deleteCustomer: async (parent, { id }, { Customer }, info) => {
            return await Customer.findOneAndDelete({ _id: id })
        }
    }
}

module.exports = resolvers;
