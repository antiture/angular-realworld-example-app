using Microsoft.EntityFrameworkCore;
using RealWorld.Entities;

namespace RealWorld.Data;
public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options)
        : base(options) { }

    public DbSet<User> Users => Set<User>();
}