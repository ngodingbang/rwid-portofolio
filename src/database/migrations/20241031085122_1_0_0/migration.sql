-- CreateTable
CREATE TABLE "skills" (
    "id" CHAR(36) NOT NULL,
    "parent_id" CHAR(36),
    "name" VARCHAR(255) NOT NULL,
    "url" VARCHAR,
    "icon_url" VARCHAR,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "skills_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "skills_name_key" ON "skills"("name");

-- AddForeignKey
ALTER TABLE "skills" ADD CONSTRAINT "skills_parent_id_fkey" FOREIGN KEY ("parent_id") REFERENCES "skills"("id") ON DELETE SET NULL ON UPDATE CASCADE;
