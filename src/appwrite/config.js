import conf from "../conf/conf";
import { Client , ID , Storage , Databases , Query , Permission , Role } from "appwrite";

export class Service {
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
        } catch (error) {
            console.log("AppWrite :: createPost :: Error: ", error);
        }
    } 

    async updatePost(slug, { title, content, featuredImage, status }) {
        try {
            
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
        } catch (error) {
            console.log("AppWrite :: updatePost :: Error: ", error);
        }
    }

    async deletePost(slug) {
        try {
            
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )

            return true
        } catch (error) {
            console.log("AppWrite :: deletePost :: Error: ", error);
            return false
        }
    }

    async getPost(slug) {
        try {
            const post = await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            //console.log("config :: post: ", post);
            return post
        } catch (error) {
            console.log("AppWrite :: getPost :: Error: ", error);
            return false;
        }
    }

    async getPosts(queries = [Query.equal("status" , "active")]) {
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries
            )
        } catch (error) {
            console.log("AppWrite :: getPosts :: Error: ", error);
            return false;
        }
    }

    //file upload services

    async  uploadFile(file) {
        try {
            //console.log(file);
            
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file,
                [
                    Permission.read(Role.any()),
                    Permission.write(Role.any())
                ]
            )
        } catch (error) {
            console.log("AppWrite :: uploadFile :: Error: ", error);
            return false;
        }
    }

    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
        } catch (error) {
            console.log("AppWrite :: deleteFile :: Error: ", error);
            return false;
        }
    }

    getFilePreview(fileId) {
        return this.bucket.getFileView(
            conf.appwriteBucketId,
            fileId
        )
    }
};

const service = new Service();

export default service;