import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required"],
      unique: [true, "Username already exists, please choose another one"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: [true, "Email already exists, please use another one"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    profilePicture: {
      type: String,
      default:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKYAAACUCAMAAAAu5KLjAAAAM1BMVEXk5ueutLemrbDm6eqrsbS2u77h4+TAxcext7re4OG6v8LV2NrZ3N3q6+zIzM7FycvO0dS/q1KXAAAD/UlEQVR4nO2ba2/rIAyGCeYWLkn+/689kHZdu7UpYGqyI15p0rRPz2xsHNswNjQ0NDQ0NDQ0NDQ0NDQ09F8KQgA1+ygVf+1N81wAzK1yusrY1TPozfRTwPwmuRDTnbiwboYToUJw1jwy7hLCaH8e53v5hPGL1M6nMCjMmr+CvIAuqj9ocOYIcgeV/T2/voPcQbe+9lQ2hzJy6p7ZCWQeZeLsh6lMJmTitN0oMz3+xdknjkIRZeRcenBCVow/cHaId3CFkEkzOSaT76l+mVNSuz3oUpfvnMRuh7mGMpahtG6Hwii/mXMhxayJnwunIqSEqpO5Y66EUVR5MndOOspQnNnvMDcyc0JByfELk6wEAVdvTMKcVH6bP5hzI8IsK+B+YWoizBlxNJNoLkzwGGNOEyehZGxDYnoaTFQE0VXxFkU5TZoEEyoK4gfRfLsBknKiqeEBdzQjJklGQmOagdkQk8jpSEqqEPobCYmhCqSJKr2jL0uiz4yNozCJSg/cNwZdIYcsi2nSJkPGkFiJKGHFGFM4KkzUVwZdUw7VTqD6sPwzzRmmEF6n7BfXNw4ppy5VY4wLJmUbtroPS9ZAumLOdfe6JJ4M1QV7hzlb9oz6jpJ+uloTRYY0fq6cS7E5XY/Rf+k8UCydFhSKCjrebY2ipLvdcdkD8u3JqYrhp1KZ55OsZH+hkNPhFlPndam0fPY2zws7d18+Y6DW41U+vp1j3zQoO71cjDSa9TflVcGt5olJhTDrCfz9LWDK2Z9Lu9w6daal3V0Qgl+slEbuP3bxZ13WZhFsXyifFTstY6K818ncHXmiCd226OjyFDfpiBpp9bq4ZFjoDxyC8tuq0zr5Be8+zPe/RNzFzdDxCADzi9yBji+hZFztuuT4ZEUrDq+fR3EuF+JHBZBSzzsjPjOr1I7K/dEerrojF/+zleJVQTyP64QaEQiunfqsSdMbkZdVRoFJ5fbBQwrgK3oIL0g/1kwCf/xGpEzcfKQMDUzj3f2o9i9KALbi/PNeQrd9ohOiv5tDJk7TcvoSttb+/gZt1mUAZj9iyivn5JuAhmZZ6JVaTA0Cct6boQaOr+hiVnBaZAoNFJTpsQbq8iSiRNoTt0RcximrM31Wt60ZZ+2UA7vTUcpZGe+eEnKqHiF8Oqv/5nTlfi9999dExeMtoAyfm4rfa8zYfb0qFW/VVK8fIFUECf6DpduRRNE2YiCP8psKmg3Eif1eRUm+RzK6qmDpi/r+uVf+S0zCwugZZ67X0avYKPHcHYZe2eii3JwUdE/K7MUVzNpjE+V5vWecJ+Vt+8HWGzNrEZXky/xQNutw9iqObsq6iHBvUltI5DwzmA3vrbziGHori3JoaChf/wBL8ja2T7IcmQAAAABJRU5ErkJggg==",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
