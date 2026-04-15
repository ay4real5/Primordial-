import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactInquirySchema, insertJobApplicationSchema } from "@shared/schema";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactInquirySchema.parse(req.body);
      const inquiry = await storage.createContactInquiry(validatedData);
      res.status(201).json({ success: true, id: inquiry.id });
    } catch (error) {
      if (error instanceof Error && error.name === "ZodError") {
        res.status(400).json({ error: "Invalid form data" });
      } else {
        console.error("Contact form error:", error);
        res.status(500).json({ error: "Failed to submit inquiry" });
      }
    }
  });

  // Get all contact inquiries (for admin purposes)
  app.get("/api/contact", async (_req, res) => {
    try {
      const inquiries = await storage.getContactInquiries();
      res.json(inquiries);
    } catch (error) {
      console.error("Get inquiries error:", error);
      res.status(500).json({ error: "Failed to fetch inquiries" });
    }
  });

  // Job application submission endpoint
  app.post("/api/careers", async (req, res) => {
    try {
      const validatedData = insertJobApplicationSchema.parse(req.body);
      const application = await storage.createJobApplication(validatedData);
      res.status(201).json({ success: true, id: application.id });
    } catch (error) {
      if (error instanceof Error && error.name === "ZodError") {
        res.status(400).json({ error: "Invalid application data" });
      } else {
        console.error("Job application error:", error);
        res.status(500).json({ error: "Failed to submit application" });
      }
    }
  });

  // Get all job applications (for admin purposes)
  app.get("/api/careers", async (_req, res) => {
    try {
      const applications = await storage.getJobApplications();
      res.json(applications);
    } catch (error) {
      console.error("Get applications error:", error);
      res.status(500).json({ error: "Failed to fetch applications" });
    }
  });

  return httpServer;
}
