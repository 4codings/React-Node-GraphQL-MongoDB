const resolvers = {
    Query: {
        customers: async (parent, args, { Customer }) => {
            try {
                return await Customer.find();
            } catch (err) {
                return err;
            }
        },
        customer: async (parent, { id }, { Customer }) => {
            try {
                return await Customer.findById(id);
            } catch (err) {
                return err;
            }
        },
    },
    Mutation: {
        createCustomer: async (parent, { name, email }, { Customer }) => {
            try {
                const newCustomer = new Customer({
                    name,
                    email,
                });
                return await newCustomer.save();
            } catch (err) {
                return err;
            }
        },
        updateCustomer: async (parent, { id, name, email }, { Customer }) => {
            try {
                return await Customer.findOneAndUpdate(
                    { _id: id },
                    { $set: { name, email } },
                    { new: true },
                );
            } catch (err) {
                return err;
            }
        },
        deleteCustomer: async (parent, { id }, { Customer }) => {
            try {
                return await Customer.findOneAndDelete({ _id: id });
            } catch (err) {
                return err;
            }
        },
    },
};

module.exports = resolvers;
