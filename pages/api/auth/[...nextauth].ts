import NextAuth from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";
export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    CredentialProvider({
      name: "Credential",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        console.log(credentials);

        return null;
      },
    }),
  ],
});
