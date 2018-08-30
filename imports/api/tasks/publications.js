import {
    Meteor
} from 'meteor/meteor';
import {
    Mongo
} from 'meteor/mongo';
import {
    check
} from 'meteor/check';

exports.getTasks = function (Tasks) {
        return Tasks.find({
            $or: [{
                    private: {
                        $ne: true
                    }
                },
                {
                    owner: this.userId
                },
            ],
        });
}