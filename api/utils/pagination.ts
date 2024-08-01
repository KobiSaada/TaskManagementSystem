import { Request } from 'express';
import { Model, SortOrder } from 'mongoose';

interface PaginatedResult<T> {
  results: T[];
  total: number;
  totalPages: number;
  currentPage: number;
}

export async function paginate<T>(req: Request, model: Model<T>): Promise<PaginatedResult<T>> {
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 10;
  const sortField = req.query.sort as string || 'createdAt';
  const sortOrder: SortOrder = req.query.order === 'asc' ? 'asc' : 'desc';

  // Build the sorting criteria object dynamically with correct types
  const sortCriteria: { [key: string]: SortOrder } = {};
  sortCriteria[sortField] = sortOrder;

  const total = await model.countDocuments();
  const results = await model.find()
    .sort(sortCriteria)
    .skip((page - 1) * limit)
    .limit(limit);

  return {
    results,
    total,
    totalPages: Math.ceil(total / limit),
    currentPage: page
  };
}
