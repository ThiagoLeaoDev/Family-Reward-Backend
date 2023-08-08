-- CreateTable
CREATE TABLE "category" (
    "id" UUID NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "image" VARCHAR(255) NOT NULL,

    CONSTRAINT "pk_1" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "execution" (
    "id" UUID NOT NULL,
    "before_image" VARCHAR(255) NOT NULL,
    "after_image" VARCHAR(255) NOT NULL,
    "status" VARCHAR(50) NOT NULL,
    "executed_by" UUID NOT NULL,
    "task_executed" UUID NOT NULL,

    CONSTRAINT "pk_4" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "task" (
    "id" UUID NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "image" VARCHAR(255) NOT NULL,
    "value" MONEY NOT NULL,
    "description" VARCHAR(2000),
    "category_task" UUID NOT NULL,
    "created_by" UUID NOT NULL,

    CONSTRAINT "pk_3" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user" (
    "id" UUID NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "image" VARCHAR(255) NOT NULL,
    "role" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "balance" MONEY NOT NULL,

    CONSTRAINT "pk_2" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "idx_executed_by" ON "execution"("executed_by");

-- CreateIndex
CREATE INDEX "idx_task_executed" ON "execution"("task_executed");

-- CreateIndex
CREATE INDEX "idx_category_task" ON "task"("category_task");

-- CreateIndex
CREATE INDEX "idx_created_by" ON "task"("created_by");

-- AddForeignKey
ALTER TABLE "execution" ADD CONSTRAINT "fk_3_execution_user" FOREIGN KEY ("executed_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "execution" ADD CONSTRAINT "fk_4_execution_task" FOREIGN KEY ("task_executed") REFERENCES "task"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "task" ADD CONSTRAINT "fk_1_task_category" FOREIGN KEY ("category_task") REFERENCES "category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "task" ADD CONSTRAINT "fk_2_task_user" FOREIGN KEY ("created_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

