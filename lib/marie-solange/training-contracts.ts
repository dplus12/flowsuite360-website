export type MarieSolangePublicationStatus = "draft" | "review" | "approved" | "published" | "archived";

export type MarieSolangeTopic = {
  id: string;
  title: string;
  description: string;
  sectors: string[];
  modules: string[];
  plans: string[];
  status: MarieSolangePublicationStatus;
  version: string;
};

export type MarieSolangeLesson = {
  id: string;
  topicId: string;
  title: string;
  theme: string;
  content: string;
  shortFormulation: string;
  detailedFormulation: string;
  examples: string[];
  keywords: string[];
  sectors: string[];
  plans: string[];
  modules: string[];
  links: Array<{ label: string; href: string }>;
  status: MarieSolangePublicationStatus;
  author: string;
  validator?: string;
  version: string;
  publishedAt?: string;
};

export type MarieSolangeApprovedAnswer = {
  id: string;
  question: string;
  answer: string;
  topicId: string;
  lessonId?: string;
  status: "approved" | "published" | "archived";
  version: string;
};

export type MarieSolangeUnknownQuestion = {
  id: string;
  question: string;
  normalizedQuestion: string;
  status: "new" | "in_review" | "answered" | "rejected";
  approvedAnswerId?: string;
  version?: string;
};

export type MarieSolangeKnowledgeVersion = {
  id: string;
  version: string;
  status: "active" | "previous" | "draft";
  publishedAt?: string;
};

export type MarieSolangePublication = {
  id: string;
  versionId: string;
  status: "scheduled" | "published" | "rolled_back";
  publishedAt?: string;
  rollbackToVersion?: string;
};

export type MarieSolangeTrainingContent = {
  topics: MarieSolangeTopic[];
  lessons: MarieSolangeLesson[];
  approvedAnswers: MarieSolangeApprovedAnswer[];
  unknownQuestions: MarieSolangeUnknownQuestion[];
  versions: MarieSolangeKnowledgeVersion[];
  publications: MarieSolangePublication[];
};
