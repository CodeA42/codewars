import java.util.Scanner;
import kyu8.*;

public class start {
  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);
    double a = scanner.nextDouble();
    double b = scanner.nextDouble();
    multiply s = new multiply(a, b);
    System.out.println(s.getMultiple());
    scanner.close();
  }
}